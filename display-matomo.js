const check = () => {
  if (typeof _paq !== "undefined") {
    document.getElementById("json").textContent = JSON.stringify(_paq, null, 2);
  }
};

const interval = 1000;

const checkInterval = () => {
  check();
  setTimeout(checkInterval, interval);
};

checkInterval();
