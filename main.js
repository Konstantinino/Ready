const xhr = new XMLHttpRequest()


xhr.open(
  'GET',
  'https://jsonplaceholder.typicode.com/posts',
  true
)

xhr.send()

xhr.onreadystatechange = function() {
  if (xhr.readyState !== 4) {
    return
  }
  // console.log('end')
  if (xhr.status === 200) {
    jsonData = JSON.parse(xhr.responseText)
    // console.log('result', jsonData)
    return jsonData
  } else {
    console.log('err', xhr.responseText)
  }
}

setTimeout(() => {
  let table = document.querySelector('.table')
  let tableBody = document.querySelector('.table tbody')
  
  let userId = ''
  try {
    for (let i = 0; i<=jsonData.length; i++) {
      let row = document.createElement('tr')
      row.classList.add('row')
      let user = jsonData[i].userId
      let id = jsonData[i].id
      let title = jsonData[i].title
      let body = jsonData[i].body
  
      if (user === userId) {
        row.innerHTML = `<td>${user}</td><td>${id}</td><td>${title}</td><td>${body}</td>`
        tableBody.appendChild(row)
      } else {
        row.innerHTML = `<td>${user}</td><td>${id}</td><td>${title}</td><td>${body}</td>`
        tableBody.appendChild(row)
        userId = user
      }
    }
  } catch (UncaughtTypeerror) {}
  
  let tableDatas = document.querySelectorAll('.row td')
  for (let tableData of tableDatas) {
    tableData.classList.add('tableData')
  }

  function sortRows(table_object) {
    let head = table_object.tHead
    let body = table_object.tBodies[0]

    let columnMarks = head.children[0].children
    let sortRows = body.children

    let position

    let trigger = false

    table_object.addEventListener('click', handler)

    function handler(event) {
      let place = event.target
      if (place === head.children[0].children[0] || place === head.children[0].children[1]) {
        position = [...columnMarks].findIndex(el=>el===place)
        console.log(position)
        handler2()
      } else if (place === head.children[0].children[2] || place === head.children[0].children[3]) {
        position = [...columnMarks].findIndex(el=>el===place)
        handler3()
        console.log(position)
      }
    }
    function handler2() {
      if (trigger) {
        trigger = false
        body.replaceChildren(...sortPlus(position))
      } else {
        trigger = true
        body.replaceChildren(...sortMinus(position))
      }
    }

    function sortPlus(position) {
      return [...sortRows].sort((a,b) => ((Number(a.children[position].innerText) < Number(b.children[position].innerText))?-1:1))
    }
    function sortMinus(position) {
      return [...sortRows].sort((a,b) => ((Number(a.children[position].innerText) > Number(b.children[position].innerText))?-1:1))
    }

    function handler3() {
      if (trigger) {
        trigger = false
        body.replaceChildren(...sortPlusAbc(position))
      } else {
        trigger = true
        body.replaceChildren(...sortMinusAbc(position))
      }
    }

    function sortPlusAbc(position) {
      return [...sortRows].sort((a,b) => (((a.children[position].innerText) < (b.children[position].innerText))?-1:1))
    }
    function sortMinusAbc(position) {
      return [...sortRows].sort((a, b)=> (((a.children[position].innerText) > (b.children[position].innerText))?-1:1))
    }
  }
  sortRows(table)

  let searchInput = document.querySelector(".input");
  searchInput.addEventListener('keyup', search);
  function search() {
    if (document.querySelector(".input").value.length > 2) {
      let rows = document.querySelectorAll('.row')
      let searchValue = document.querySelector(".input").value;
      for (var i = 0; i < rows.length; i++) {
        if(rows[i].innerText.toLowerCase()
          .includes(searchValue.toLowerCase())) {
            rows[i].classList.remove("hidden");
        } else {
          rows[i].classList.add("hidden");
        }
      }
    } else {
      let rows = document.querySelectorAll('.row')
      for (let row of rows) {
        row.classList.remove("hidden");
      }
    }
  }

}, 500)
