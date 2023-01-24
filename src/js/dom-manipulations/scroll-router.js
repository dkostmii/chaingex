import { isString } from "../fn/identity/index.js";
import scrollRouter from "../routers/scroll.js";

function useScrollRouter() {
  const scrollLinks = document.querySelectorAll('*[data-scrollrouter]');

  [...scrollLinks].forEach(linkEl => {
    isString(linkEl.dataset.scrollrouter).nonEmpty().throw('[data-scrollrouter]');
    linkEl.href = "scrollrouter";

    linkEl.addEventListener('click', e => {
      e.preventDefault();
      scrollRouter(linkEl.dataset.scrollrouter);
    });
  });
}

export default useScrollRouter;
