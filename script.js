const courses = [
    {
      name: "Complete ReactJS course",
      price: "1000",
    },
    {
      name: "Complete Angular course",
      price: "100",
    },
    {
      name: "Complete MERN course",
      price: "200",
    },
    {
      name: "Complete C++ course",
      price: "400",
    },
    {
      name: "Django Course",
      price: "7005",
    },
  ];
  
  {
    /* <li class="list-group-item">
    Complete C++ course
    <span class="float-right">$ 2.8</span>;
  </li>; */
  }
  
  function generateLIST() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML="";
    courses.forEach((course) => {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
  
      const name = document.createTextNode(course.name);
      li.appendChild(name);
  
      const span = document.createElement("span");
      span.classList.add("float-right");
      const price = document.createTextNode("$ " + course.price);
      span.appendChild(price);
  
      li.appendChild(span);
      ul.appendChild(li);
    });
  }
  
  window.addEventListener("load",generateLIST);

  function incre(){
  const button = document.querySelector('.sort-btn');
  button.addEventListener('click',() => {
    courses.sort((a,b)=>
      a.price-b.price);
      generateLIST();
  });
  }
  function decre(){
  const button = document.querySelector('.dec-btn');
  button.addEventListener('click',() => {
    courses.sort((a,b)=>
      b.price-a.price);
      generateLIST();
  });
}
  
  

  
  

  
