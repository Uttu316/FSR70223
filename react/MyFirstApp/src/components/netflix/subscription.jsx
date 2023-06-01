import React from "react";

const NFSubscritpion = () => {
  return (
    <div className="nf-subscription-section">
      <p className="nf-subscription-title">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="nf-subscription-form">
        <form>
          <div className="nf-subscription-input-item">
            <input type="email" id="nf-user-email" name="email" />
            <label htmlFor="nf-user-email">Email Address</label>
          </div>
          <button className="nf-lg-btn nf-btn-red">
            Get Started <i className="fa-solid fa-chevron-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NFSubscritpion;
