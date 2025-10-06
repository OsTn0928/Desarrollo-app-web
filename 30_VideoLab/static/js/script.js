// script.js
// Diseñado para trabajar con tu HTML y CSS sin modificarlos.
// Funcionalidad:
// - hover sobre <img class="vid-s"> -> muestra y reproduce un <video> preview en su lugar
// - mouseout -> restaura la <img>
// - click / Enter / Space -> intercambia el video principal con el correspondiente de la miniatura
// Nota: si los nombres de los archivos .mp4 no coinciden con la conversión automática,
// añade rutas explícitas en `manualMap` más abajo.

document.addEventListener('DOMContentLoaded', () => {

  // Si tus videos tienen nombres distintos a la conversión automática,
  // añade aquí: "DF.png": "resources/video/Nombre real del video.mp4"
  const manualMap = {
    // ejemplo:
    // "DF.png": "resources/video/Arcangel - Don Francisco (Video Oficial).mp4",
    // "MT.jpg": "resources/video/Arcangel - Mucho Ticket (Video Oficial).mp4"
  };

  const mainVideo = document.querySelector('video.placeholder');
  const mainTitleEl = document.querySelector('.start h1');
  const mainSubEl = document.querySelector('.start h3');

  // seleccionar todas las miniaturas (.video-small)
  const thumbs = Array.from(document.querySelectorAll('.video-small'));

  thumbs.forEach(thumb => {
    const img = thumb.querySelector('img.vid-s');
    if (!img) return;

    // permitir foco por teclado
    thumb.setAttribute('tabindex', '0');

    // generar la ruta de video a partir de la imagen
    function getVideoSrcFromImg(imgEl) {
      const imgSrc = imgEl.getAttribute('src') || '';
      const imgName = imgSrc.split('/').pop(); // e.g. "DF.png"
      // si existe en manualMap, usarlo
      if (manualMap[imgName]) return manualMap[imgName];
      // convertir ruta images -> video y extensión a .mp4
      // e.g. resources/images/DF.png -> resources/video/DF.mp4
      let derived = imgSrc.replace('/images/', '/video/').replace(/\.[^/.]+$/, '.mp4');
      return derived;
    }

    // crear elemento video (no insertamos en DOM aún)
    function createPreviewVideo(src, poster) {
      const v = document.createElement('video');
      v.className = 'thumb-preview';
      v.setAttribute('src', src);
      if (poster) v.setAttribute('poster', poster);
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
      v.preload = 'metadata';
      v.style.width = img.style.width || getComputedStyle(img).width;
      v.style.height = img.style.height || getComputedStyle(img).height;
      v.style.objectFit = 'cover';
      v.style.display = 'block';
      return v;
    }

    // onmouseover -> mostrar video preview
    thumb.addEventListener('mouseover', (e) => {
      // si ya hay video, no crear otro
      if (thumb._previewVideo) return;
      const videoSrc = getVideoSrcFromImg(img);
      if (!videoSrc) return;
      const preview = createPreviewVideo(videoSrc, img.getAttribute('src'));
      // reemplazar imagen por video en el DOM (mantenemos referencia para restaurar)
      img.style.display = 'none';
      thumb.insertBefore(preview, thumb.querySelector('.video-title'));
      thumb._previewVideo = preview;

      // intentar reproducir (interacción de usuario existe: hover)
      preview.play().catch(() => {
        // si no se reproduce por política del navegador, dejaremos poster (no rompe nada)
      });

      // si el preview falla al cargar el video, restaurar img
      preview.addEventListener('error', () => {
        cleanupPreview();
      });

      function cleanupPreview() {
        if (thumb._previewVideo) {
          try { thumb._previewVideo.pause(); } catch(e){}
          thumb._previewVideo.remove();
          thumb._previewVideo = null;
        }
        img.style.display = '';
      }
    });

    // onmouseout -> quitar preview y restaurar imagen
    thumb.addEventListener('mouseout', (e) => {
      if (!thumb._previewVideo) return;
      try { thumb._previewVideo.pause(); } catch(e){}
      thumb._previewVideo.remove();
      thumb._previewVideo = null;
      img.style.display = '';
    });

    // click -> swap con main video
    thumb.addEventListener('click', (e) => {
      performSwap();
    });

    // keyboard support: Enter / Space to swap, arrows to navigate
    thumb.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        performSwap();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const next = thumb.nextElementSibling;
        if (next) next.focus();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = thumb.previousElementSibling;
        if (prev) prev.focus();
      }
    });

    function performSwap() {
      const thumbVideoSrc = getVideoSrcFromImg(img); // ruta que queremos poner en main
      const thumbTitleEl = thumb.querySelector('.video-title');
      const thumbTitle = thumbTitleEl ? thumbTitleEl.textContent : '';
      // obtener subtítulo si existe
      const thumbSubEl = thumb.querySelector('.video-sub');
      const thumbSub = thumbSubEl ? thumbSubEl.textContent : '';

      // guardar estado actual del main
      const prevMainSrc = mainVideo.getAttribute('src') || '';
      const prevMainPoster = mainVideo.getAttribute('poster') || '';
      const prevMainTitle = mainTitleEl ? mainTitleEl.textContent : '';
      const prevMainSub = mainSubEl ? mainSubEl.textContent : '';

      // Asignar nuevo src al main si el thumbVideoSrc existe
      if (thumbVideoSrc) {
        // temporal: crear un elemento para probar si el archivo existe (carga metadata)
        const tester = document.createElement('video');
        tester.preload = 'metadata';
        tester.src = thumbVideoSrc;
        tester.addEventListener('loadedmetadata', () => {
          // swap seguro: ponemos el nuevo src al main
          mainVideo.setAttribute('src', thumbVideoSrc);
          // opcional: quitar poster del main para que no interfiera
          mainVideo.removeAttribute('poster');
          try { mainVideo.load(); } catch(e){}
          mainVideo.play().catch(()=>{ /* autoplay bloqueado puede fallar */});
        });
        tester.addEventListener('error', () => {
          // si no existe el archivo, avisamos por consola pero no rompemos nada
          console.warn('No se pudo cargar el video de la miniatura:', thumbVideoSrc);
        });
      }

      // intercambiar títulos: colocar título de la miniatura en el main
      if (mainTitleEl && thumbTitle) mainTitleEl.textContent = thumbTitle;
      if (mainSubEl && thumbSub) mainSubEl.textContent = thumbSub;

      // colocar en la miniatura el título que tenía el main (simulamos intercambio)
      if (thumbTitleEl) thumbTitleEl.textContent = prevMainTitle || thumbTitleEl.textContent;
      if (thumbSubEl) thumbSubEl.textContent = prevMainSub || thumbSubEl.textContent;

      // opcional: si la miniatura está mostrando un <video> preview, pausarlo y quitarlo,
      // luego reemplazar la <img> por la poster del main anterior (si tuvieses poster).
      if (thumb._previewVideo) {
        try { thumb._previewVideo.pause(); } catch(e){}
        thumb._previewVideo.remove();
        thumb._previewVideo = null;
      }

      // si sabemos la ruta previa del main, intentamos ponerla como nueva imagen en la miniatura.
      // Pero el main probablemente no tenía una imagen; aquí intentamos usar poster si existía.
      if (prevMainPoster) {
        img.setAttribute('src', prevMainPoster);
      } else {
        // si no había poster, dejamos la imagen tal cual (no intentamos forzar un frame)
      }

      // dar foco al main para accesibilidad
      try { mainVideo.focus(); } catch (e) {}
    }

  }); // end thumbs.forEach

}); // end DOMContentLoaded
