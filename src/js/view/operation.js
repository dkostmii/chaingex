import { ModelRepository } from "../model/base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createOperationView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const operationModel = modelRepository.find('operation');

  const tabs = document.querySelectorAll('*[data-model="operation"][data-modelaction]');

  const exchangeTabs = [...tabs].filter(t => t.dataset.modelaction === 'select-exchange');
  const buySellTabs = [...tabs].filter(t => t.dataset.modelaction === 'select-buy-sell');

  [...tabs].forEach(tab => {
    tab.addEventListener('click', () => {
      operationModel.doAction(tab.dataset.modelaction);
    });
  });

  operationModel.addEventListener('update', (_, newValue) => {
    if (newValue === 'exchange') {
      exchangeTabs.forEach(t => { 
        if (t.hasAttribute("disabled")) {
          t.removeAttribute("disabled");
          t.click();
          t.setAttribute("disabled", "");
        } else {
          t.click();
        }
      });

    } else if (newValue === 'buy-sell') {
      buySellTabs.forEach(t => {
        if (t.hasAttribute("disabled")) {
          t.removeAttribute("disabled");
          t.click();
          t.setAttribute("disabled", "");
        } else {
          t.click();
        }
      });
    }
  });

  
}

export default createOperationView;
