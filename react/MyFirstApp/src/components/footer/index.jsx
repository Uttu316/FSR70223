import React from "react";
const footerStyle = {
    padding:20,
    background:'black',
    color:'white',
    fontWeight:700,
    textAlign:'center',
    fontSize:20,
    marginTop:20
}
const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p> Footer for react app. Made with ❤️</p>
    </footer>
  );
};
export default Footer;
