import logo from './logo.svg';
import './App.css';
function handleSubmit(e){
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  console.log(e.target[2].value);
  console.log(e.target[3].value);
  console.log(e.target[4].value);
  console.log(e.target[5].value);
  console.log(e.target[6].value);
}
function App() {
  return (
    <div className="App">
      <form onSubmit={handleSubmit} >
        <label >Name :
          <input  name="" id="name" />
        </label>
        <br />
        <label >E-mail : 
          <input  name="" id="email" />
        </label>
        <br />
        <label >Password :
          <input  name="" id="password" type='password'/>
        </label>
        <br />
        <label >Gender :
          <select name="gender" id="">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>City :
          <input  name="" id="city" type='text'/>
        </label>
        <br />
        <label >State :
          <input  name="" id="state" type='text'/>
        </label>
        <br />
        <label >Country :
          <input  name="" id="country" type='ext'/>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
