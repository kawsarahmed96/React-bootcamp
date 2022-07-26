// const profile = `
// <h1>md kawsar ali</h1>
// <P>i am learning react</p>
// `;
// document.querySelector(".container").insertAdjacentHTML("afterbegin", profile);

// const elms = React.createElement("h2", { id: "random " }, "my name kawsar");
// ReactDOM.render(elms, document.querySelector(".container"));

//React component
// function bio(props) {
//   //   console.log(props);
//   return React.createElement(
//     "div",
//     { id: "profile" },
//     React.createElement(
//       "h1",
//       { className: "Clsname" },
//       `i am ${props.name} ahmed`
//     ),
//     React.createElement("p", { id: "pg" }, `i am a ${props.prof}`)
//   );
// }

// function getProfile() {
//   React.createElement(
//     "div",
//     { id: "divId" },
//     React.createElement(bio, { name: "kawsar", prof: "js developer" })
//   ),
//     React.createElement(
//       "div",
//       { id: "divId" },
//       React.createElement(bio, { name: "kamal", prof: "php developer" })
//     ),
//     React.createElement(
//       "div",
//       { id: "divId" },
//       React.createElement(bio, { name: "siam", prof: "React developer" })
//     );
// }

// ReactDOM.render(
//   React.createElement(getProfile),
//   document.querySelector(".container")
// );

//jsx start
function bio(props) {
  //jsx
  return (
    <div className="profile">
      <h1>i am {props.name}</h1>
      <p>i am a {props.prof}</p>
    </div>
  );
}
function getProfile() {
  return (
    <div id="biodata">
      <bio name="kawsar" prof="webdeveloper" />;
      <bio name="khalil" prof="designer" />;
    </div>
  );
}

ReactDOM.render(<getProfile />, document.querySelector(".container"));
