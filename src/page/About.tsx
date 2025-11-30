import { Typography, Container, Box } from "@mui/material";
import { InfoCompany } from "../constant/certDetail";
import './style.css'

export default function About() {
  return (
    <>
      <Container
        sx={{
          justifyContent: "row",
          display: ['',"flex"],
          pt: 4,
          gap: [0,4],
        }}
      >
        <Box
          sx={{
            pb: 0,
            flexDirection: "column",
            justifyContent: "center",
             width: [1,0.7],
          }}
        >
          <Box sx={{ height: "auto", pb: 4 }}>
            <Typography
              color="black"
              variant="h3"
              gutterBottom
              sx={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                textAlign: "start",
                fontSize: 24,
                pb: 2,
                color: '#012C4E',
              }}
            >
              ABOUT
            </Typography>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: "pre-line",
                fontSize: 18,
                textAlign: "justify",
              }}
            >
              SCW International Certification Co., Ltd. ก่อตั้งเมื่อวันที่ 4
              ธันวาคม พ.ศ. 2544 ทำธุรกิจบริการให้การตรวจรับรองระบบมาตรฐาน
              สามารถออกใบรับรองระบบ ISO 9001, ระบบสิ่งแวดล้อม ISO 14001,
              ความปลอดภัยและอาชีวอนามัย ISO 45001, ความปลอดภัยทางอาหาร
              GHPs/HACCP, ISO 22000, FSSC 22000, เครื่องมือแพทย์ ISO 13485 จาก
              LMS Assessments Limited ซึ่งได้รับการรับรองจาก SCC, แคนาดา และจาก
              LMS, EGAC สามารถสืบค้นข้อมูลการรับรองใน website ของ LMS
              (บริษัทแม่) และ website ของ IAF
              ซึ่งเป็นหลักการแสดงสถานะของใบรับรองที่ถูกต้องตามหลักสากล
              เพื่อขยายโอกาสทางการตลาดของสินค้าในประเทศและต่างประเทศ
              <br />
              <br />
              SCW International Certification Co., Ltd. Established since
              4/12/2001, operating in the business of providing certification
              services, ISO 9001, ISO 14001 environmental system, ISO 14001
              environmental system, occupational health and safety, ISO 45001,
              food safety, GHPs/HACCP, ISO 22000, FSSC 22000, medical equipment
              ISO 13485 from LMS Assessments Limited, which is certified by SCC,
              Canada and from LMS, EGAC can search for certification information
              on the LMS website (parent company) and IAF's website, which is
              the principle of showing the status of the certificate that is
              valid according to international principles. To expand market
              opportunities for domestic and international products
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: [1,0.3] }}>
          <Typography
            color="black"
            variant="h3"
            gutterBottom
            sx={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: 24,
              pb: 2,
              color: '#012C4E',
              textAlign: "start",
            }}
          >
            CONTACT INFO
          </Typography>
          <InfoCompany />
        </Box>
      </Container>
      <Container sx={{ mt:[4,0] , borderTop: "1px solid #012C4E" }}>
        <Box sx={{ pt: 4, height: "auto", pb: 10 }}>
          <Typography
            className="navy-text"
            variant="h3"
            gutterBottom
            sx={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              textAlign: ["start","center"],
              fontSize: 24,
              pb: [1,2],
            }}
          >
            BUSINESS PARTNERS
          </Typography>
          <Box
            sx={{
              display: ["", "flex"],
              justifyContent: ["","center"],
              // alignItems: "center",
              gap: 5,
            }}
          >
            <a
              href="https://www.lmscert.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/LMS.svg"
                alt="LMS logo"
                style={{
                  height: "10vh",
                  paddingBottom: "5px",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  border: "4px solid whitesmoke",
                  borderRadius: "10px",
                }}
              />
            </a>
            <a
              href="https://qfscerts.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/QFS.webp"
                alt="QFS logo"
                style={{
                  height: "10vh",
                  border: "4px solid whitesmoke",
                  paddingRight: "15px",
                  paddingLeft: "15px",
                  borderRadius: "10px",
                }}
              />
            </a>
            <a
              href="https://www.zenith-worldwide.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/Zenith.webp"
                alt="Zenith logo"
                style={{
                  height: "10vh",
                  border: "4px solid whitesmoke",
                  paddingRight: "18px",
                  paddingLeft: "18px",
                  borderRadius: "10px",
                }}
              />
            </a>
          </Box>
        </Box>
      </Container>
    </>
  );
}
