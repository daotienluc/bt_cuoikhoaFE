import React, { useState, useEffect } from "react";
import { SvgIcon } from "../../../../components/svg/svgIcon";
import { Link } from "react-router-dom";
import { pathDefalut } from "../../../../common/path";
import ButtonOutLine from "../../../../components/button/ButtonOutLine";
import { GlobalOutlined } from "@ant-design/icons";
import DropdownCustom from "../../../../components/DropdownCustom/DropdownCustom";

const HeaderTemplate = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="border-b-2 py-5 fixed w-full bg-white z-50">
      <div className="container">
        <div className="flex justify-between items-start">
          <div>
            <Link to={pathDefalut.homePage}>
              <SvgIcon.logo />
            </Link>
          </div>
          <div className="pl-[280px]">
            {isScrolled ? (
              <>
                <ButtonOutLine buttonContent="1" />
                <ButtonOutLine buttonContent="2" />
                <ButtonOutLine buttonContent="3" />
                <ButtonOutLine buttonContent="4" />
              </>
            ) : (
              <div>
                <div>
                  <ButtonOutLine buttonContent="Chỗ ở" />
                  <ButtonOutLine buttonContent="Trải nghiệm" />
                </div>
                <div>
                  <ButtonOutLine buttonContent="1" />
                  <ButtonOutLine buttonContent="2" />
                  <ButtonOutLine buttonContent="3" />
                  <ButtonOutLine buttonContent="4" />
                </div>
              </div>
            )}
          </div>
          <div>
            <ButtonOutLine buttonContent="Cho thuê chỗ ở qua Airbnb" />
            <ButtonOutLine buttonContent={<GlobalOutlined />} />
            <DropdownCustom />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTemplate;
