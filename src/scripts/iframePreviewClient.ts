(() => {
    const roots = document.querySelectorAll<HTMLElement>('.ipw');
    roots.forEach((root) => {
      const wrap = root.querySelector<HTMLElement>('.ipw__framewrap')!;
      const iframe = root.querySelector<HTMLIFrameElement>('.ipw__iframe')!;
      const [btnCopy, btnOpen, btnFs] = root.querySelectorAll<HTMLButtonElement>('.ipw__btn');
  
      // Auto-resize height from child
      window.addEventListener('message', (e: MessageEvent) => {
        const data = e.data as any;
        if (data && typeof data.__previewHeight === 'number') {
          const min = 160, max = 1400;
          const h = Math.min(max, Math.max(min, data.__previewHeight));
          iframe.style.height = `${h}px`;
        }
      });
  
      // Copy original HTML (body inner before <script>)
      btnCopy?.addEventListener('click', async () => {
        try {
          const src = iframe.src;
          const base64 = src.split(',')[1] ?? '';
          const raw = atob(base64);
          const match = raw.match(/<body>[\s\S]*?([\s\S]*?)<script/);
          const html = (match?.[1] ?? '').trim();
          await navigator.clipboard.writeText(html);
          btnCopy.textContent = 'Copied';
          setTimeout(() => (btnCopy.textContent = 'Copy'), 1200);
        } catch {
          btnCopy.textContent = 'Copy failed';
          setTimeout(() => (btnCopy.textContent = 'Copy'), 1200);
        }
      });
  
      // Open in a new tab
      btnOpen?.addEventListener('click', () => {
        window.open(iframe.src, '_blank', 'noopener,noreferrer');
      });
  
      // Fullscreen toggle
      btnFs?.addEventListener('click', async () => {
        if (document.fullscreenElement) {
          await document.exitFullscreen();
          return;
        }
        try {
          await wrap.requestFullscreen();
        } catch {
          window.open(iframe.src, '_blank', 'noopener,noreferrer');
        }
      });
  
      // ESC exits fullscreen
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Escape' && document.fullscreenElement) {
          document.exitFullscreen();
        }
      });
    });
  })();
  