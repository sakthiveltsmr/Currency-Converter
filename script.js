const select = document.querySelectorAll(".currency");
const btn = document.querySelector("#btn");
const num = document.querySelector("#num");
const ans = document.querySelector("#ans");

const getData = async () => {
  const data = await fetch("https://api.frankfurter.app/currencies");
  const res = await data.json();
  displayData(res);
  // console.log(res);
};

getData();

const displayData = (data) => {
  // console.log(data);
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
  // console.log(entries);
};

btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = num.value;

  if (currency1 != currency2) {
    convert(currency1, currency2, value);
  } else {
    alert("Choose Different Currency");
  }

  // async function convert(curr1, curr2, val) {
  //   const host = "api.frankfurter.app";

  //   const data = await fetch(
  //     `http://${host}/latest?amount=${val}&from=${curr1}&to=${curr2}`
  //   );
  //   console.log(data);
  //   const res = data.json();
  //   console.log(res);
  // }

  function convert(curr1, curr2, val) {
    const host = "api.frankfurter.app";

    fetch(`http://${host}/latest?amount=${val}&from=${curr1}&to=${curr2}`)
      .then((val) => val.json())
      .then((val) => {
        console.log(Object.values(val.rates)[0]);
        ans.value = Object.values(val.rates)[0];
      });
  }
});
