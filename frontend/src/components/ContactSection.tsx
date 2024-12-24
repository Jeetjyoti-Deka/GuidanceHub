import Image from "next/image";
import Container from "./Container";

const ContactSection = () => {
  return (
    <div className="bg-black/90 text-white/75 py-6">
      <Container>
        <div className="grid grid-cols-6">
          <div className="col-span-3">GuidanceHub</div>
          <div>
            <h4 className="text-lg text-white mb-6">Company</h4>
            <div className="flex flex-col gap-y-2">
              <p>About Us</p>
              <p>Events</p>
              <p>News</p>
              <p>Blogs</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg text-white mb-6">Reviews</h4>
            <div className="flex flex-col gap-y-2">
              <p>Mentor Reviews</p>
              <p>Mentee Reviews</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg text-white mb-6">Get In Touch</h4>
            <p className="underline underline-offset-2">
              hello@guidancehub.com
            </p>
            <div className="flex items-center gap-x-3 mt-4">
              <div className="p-2 rounded-lg bg-white/10 w-fit">
                <Image
                  src={"/instagram.png"}
                  alt="instagram"
                  width={30}
                  height={30}
                  className="invert"
                />
              </div>
              <div className="p-2 rounded-lg bg-white/10 w-fit">
                <Image
                  src={"/linkedin.png"}
                  alt="instagram"
                  width={30}
                  height={30}
                  className="invert"
                />
              </div>
              <div className="p-2 rounded-lg bg-white/10 w-fit">
                <Image
                  src={"/facebook.png"}
                  alt="instagram"
                  width={30}
                  height={30}
                  className="invert"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-white/20 flex items-center justify-between pt-10 mt-10">
          <p>@ 2024 Prodmast, All rights reserved</p>
          <div className="flex items-center gap-x-6">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ContactSection;
