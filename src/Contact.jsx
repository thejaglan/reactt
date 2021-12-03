import React, {useState} from 'react';

const Contact = () => {
    const [data, setData] = useState({
        firstname:'',
        lastname:'',
        phone:'',
        email:'',
        city:'',
        address:'',
        pincode:'',
    })

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            };
        });
    };

const formSubmit = (e) => {
    e.preValDefault();
    alert(
        `My name is ${data.firstname}. My Mobile Number is ${data.phone}`
    );
};

    return (
        <>
        <div className="py-3">
            <h2 className="text-center">Contact us</h2>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-12 col-xs-12 col-sm-12 col-md-10 col-lg-9 col-xl-8 mx-auto">

 <form onSubmit={formSubmit} className="gy-5">
  <div className="form-row row my-3 ">

    <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <label for="inputname4">First Name</label>
      <input type="name" className="form-control" id="inputname4" 
      name="firstname"
      value={data.firstname}
      onChange={InputEvent}
      placeholder="Enter Your First Name" />
    </div>

    <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <label for="inputlname4">Last Name</label>
      <input type="name" className="form-control" id="inputlname4" 
      name="lastname"
      value={data.lastname}
      onChange={InputEvent}
      placeholder="Enter Your Last Name" />
    </div>

    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <label for="inputAddress">Phone Number</label>
      <input type="tel" maxLength="10" className="form-control" id="inputAddress" 
      name="phone"
      value={data.phone}
      onChange={InputEvent}      
      placeholder="+91-0123456789" />
    </div>

    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <label for="inputAddress2">Email Address</label>
      <input type="email" className="form-control" id="inputAddress2" 
      name="email"
      value={data.email}
      onChange={InputEvent}      
      placeholder="Enter Your Email Address" />
    </div>

    
    <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <label for="inputState">State and UT</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>Andaman and Nicobar (UT)</option>
        <option>Andhra Pradesh</option>
        <option>Arunachal Pradesh</option>
        <option>Assam</option>
        <option>Bihar</option>
        <option>Chandigarh (UT)</option>
        <option>Chhattisgarh</option>
        <option>Dadra and Nagar Haveli (UT)</option>
        <option>Daman and Diu (UT)</option>
        <option>Delhi</option>
        <option>Goa</option>
        <option>Gujarat</option>
        <option>Haryana</option>
        <option>Himachal Pradesh</option>
        <option>Jammu and Kashmir</option>
        <option>Jharkhand</option>
        <option>Karnataka </option>
        <option>Kerala</option>
        <option>Lakshadweep (UT)</option>
        <option>Madhya Pradesh</option>
        <option>Maharashtra</option>
        <option>Manipur</option>
        <option>Meghalaya</option>
        <option>Mizoram</option>
        <option>Nagaland</option>
        <option>Orissa</option>
        <option>Puducherry (UT) </option>
        <option>Punjab</option>
        <option>Rajasthan </option>
        <option>Sikkim</option>
        <option>Tamil Nadu</option>
        <option>Tripura</option>
        <option>Uttar Pradesh</option>
        <option>Uttarakhand</option>
        <option>West Bengal</option>
        <option>Telangana</option>
      </select>
    </div>

    <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity" 
      name="city"
      value={data.city}
      onChange={InputEvent}      
      placeholder="Enter Your City Name"/>
    </div>

    <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
    <label for="inputAddress5">Address</label>
    <input type="text" className="form-control" id="inputAddress5" 
      name="address"
      value={data.address}
      onChange={InputEvent}    
      placeholder="Apartment, studio, or floor" />
    </div>

    <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <label for="inputZip">PinCode</label>
      <input type="number" maxLength="6" className="form-control" id="inputZip"
       name="pincode"
       value={data.pincode}
       onChange={InputEvent}       
       placeholder="000000" />
    </div>
  </div>
  <button type="submit" className="btn btn-outline-primary px-3">Sign in</button>
</form>

                    
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact;
