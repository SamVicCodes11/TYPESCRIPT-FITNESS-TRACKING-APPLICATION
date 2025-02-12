import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="Evogym Logo" src={Logo} />
          <p className="my-5">
            At Evogym, we’re more than just a fitness center—we’re a
            community committed to your success. Whether you're a beginner
            or a pro, we provide state-of-the-art facilities, expert
            coaching, and a supportive environment to help you reach your
            fitness goals.
          </p>
          <p>© {new Date().getFullYear()} Evogym. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Quick Links</h4>
          <p className="my-5 cursor-pointer hover:text-primary-500">About Us</p>
          <p className="my-5 cursor-pointer hover:text-primary-500">
            Our Classes
          </p>
          <p className="cursor-pointer hover:text-primary-500">
            Membership Plans
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Need help? Contact us!</p>
          <p className="font-bold">+2348146557494</p>
          <p className="mt-2">victorakpobasa2020@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
