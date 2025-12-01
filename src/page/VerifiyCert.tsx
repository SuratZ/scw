import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Modal,
  // Paper,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import "./style.css";
import "../component/modal.css";

type SheetData = {
  ISIC_Code: string;
  address: string;
  customerName: string;
  expiredDate: string;
  initialRegistrationDate: string;
  issuanceDate: string;
  orderNo: string;
  projectNo: string;
  scopeOfCert: string;
  serialNoEng: string;
  serialNoThai: string;
  status: string;
  sysOfCert: string;
  [key: string]: string;
};

const sheetId = "1O6uJI7KtabX3XVPrlwT8_GTe1OaM_Ldm22RkMiq-c_g"; // replace with your Google Sheet ID
const GOOGLE_SHEET_API_URL = `https://opensheet.elk.sh/${sheetId}/1`; // change to index of your sheet.

const VerifiyCert: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<SheetData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<SheetData[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    // Validate required fields
    if (query.trim() === "") {
      setError("Input required.");
      return;
    } else if (query.trim().length < 5) {
      setError("Input 5 parameters minimum.");
      return;
    }
    setLoading(true);
    const found = data.find(
      (row) =>
      (row.projectNo.toLowerCase() === query.toLowerCase()) || 
      (row.projectNo.replaceAll('-', '').toLowerCase() === query.toLowerCase()) ||
      (row.customerName.toLowerCase().startsWith(query.toLowerCase().trim()))
    );
    setResult(found || null);
    if (found) {
      setOpenModal(true);
    } else {
      setError("No matching certificate found.");
    }
    setLoading(false);
  };

  useEffect(() => {
    setData([]);
    fetch(GOOGLE_SHEET_API_URL)
      .then((res) => res.json())
      .then((rows) => {
        const filterData = rows.filter(
          (row: SheetData) =>
            row.serialNoEng || row.serialNoThai || row.customerName
        );
        setData(filterData);
      });
  }, []);

  useEffect(() => {
    if (error !== "") {
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }, [error]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url(./images/zooming.webp)',
          backgroundSize: '200%',
          backgroundPosition: '00% 55%',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgba(0, 0, 0, 0.10)',
          backgroundBlendMode: 'overlay',
          minHeight: ['90vh'],
        }}>
      <Container
        sx={{
          justifyContent: "row",
          display: ["", "flex"],
          minHeight: '80vh',
          alignItems: 'center',
          pt: 4,
          gap: [0, 4],
        }}
      >
        <Container
          component="form"
          onSubmit={handleSearch}
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
            bgcolor: 'rgba(255, 255, 255, 0.90)',
            flexDirection: "column",
          }}
        >
          <Container
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              className="navy-text"
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontFamily: "Roboto",
                fontSize: 24,
              }}
            >
              VERIFY CERTIFICATE
            </Typography>
          </Container>
          <Container
            sx={{
              display: ["", "flex"],
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              my: 2,
            }}
          >
            <Box
              sx={{
                pt: [2, 0],
                justifyContent: ["center", ""],
                display: ["flex", ""],
              }}>
              <TextField
                required
                label="S/N or Company name"
                variant="filled"
                error={error !== ""}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{ width: ["100vh", "50vh"],
                  mb: [error ? 0 : 3, 3]
                 }}
                helperText={error}
              />
            </Box>
            <Box
              sx={{
                pt: [2, 0],
                justifyContent: ["center", ""],
                display: ["flex", ""]
              }}
            >
              <Button
                variant="contained"
                type="submit"
                disabled={loading}
                sx={{
                  height: "50px",
                  width: ["100vh", "10vh"],
                  mb: [0, error ? 6 : 3]
                }}
              >
                View
              </Button>
            </Box>
          </Container>
        </Container>
      </Container>
      </Box>
      {openModal && result && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          className="modal-overlay"
        >
          <Card className="modal-content">
            <Box sx={{ position: "absolute", top: 20, right: 20 }}>
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </Box>

            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", mb: 1, mx: 3 }}
            >
              {result.customerName}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mx: 3 }}>
              {result.scopeOfCert}
            </Typography>
            <CardContent
              sx={{
                maxHeight: ["60vh", "70vh"],
                overflow: "scroll",
              }}
            >
              <Container
                sx={{
                  display: "flex",
                }}
              >
                {result && (
                  <Container
                    sx={{
                      mt: 1,
                      border: "1px solid #ccc",
                      p: 2,
                      borderRadius: "8px",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        flexWrap: "wrap",
                        gap: 2,
                        mb: 2,
                        alignItems: { sm: "flex-end" },
                      }}
                    >
                      <TextField
                        label="Company Name"
                        value={result.customerName}
                        variant="standard"
                        slotProps={{
                          input: {
                            readOnly: true,
                          },
                        }}
                        sx={{
                          mb: { xs: 2, sm: 0 },
                          mr: { xs: 0, sm: 2 },
                          width: { xs: "100%", sm: "60ch" },
                        }}
                      />
                      <TextField
                        label="Certificate No."
                        value={`${result.serialNoEng || result.serialNoThai}`}
                        variant="standard"
                        slotProps={{
                          input: {
                            readOnly: true,
                          },
                        }}
                        sx={{
                          mb: { xs: 2, sm: 0 },
                          mr: { xs: 0, sm: 2 },
                          width: { xs: "100%", sm: "12ch" },
                        }}
                      />
                      <TextField
                        label="Standard"
                        value={result.sysOfCert}
                        variant="standard"
                        slotProps={{
                          input: {
                            readOnly: true,
                          },
                        }}
                        sx={{
                          mb: { xs: 2, sm: 0 },
                          mr: { xs: 0, sm: 2 },
                          width: { xs: "100%", sm: "15ch" },
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <TextField
                        label="Scope"
                        value={result.scopeOfCert}
                        variant="standard"
                        slotProps={{
                          input: {
                            readOnly: true,
                          },
                        }}
                        sx={{
                          width: "100%",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        flexWrap: "wrap",
                        gap: 2,
                        mb: 2,
                        alignItems: { sm: "flex-end" },
                      }}
                    >
                      <TextField
                        label="Initial Registration Date"
                        value={result.initialRegistrationDate}
                        variant="standard"
                        slotProps={{
                          input: {
                            readOnly: true,
                          },
                        }}
                        sx={{
                          mb: { xs: 2, sm: 0 },
                          mr: { xs: 0, sm: 2 },
                          width: { xs: "100%", sm: "20ch" },
                        }}
                      />
                      <TextField
                        label="Issued Date"
                        value={result.issuanceDate}
                        variant="standard"
                        slotProps={{
                          input: {
                            readOnly: true,
                          },
                        }}
                        sx={{
                          mb: { xs: 2, sm: 0 },
                          mr: { xs: 0, sm: 2 },
                          width: { xs: "100%", sm: "22ch" },
                        }}
                      />
                      <TextField
                        label="Expiry Date"
                        value={result.expiredDate}
                        variant="standard"
                        slotProps={{
                          input: {
                            readOnly: true,
                          },
                        }}
                        sx={{
                          mb: { xs: 2, sm: 0 },
                          mr: { xs: 0, sm: 2 },
                          width: { xs: "100%", sm: "20ch" },
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        backgroundColor:
                          result.status === "Active" ? "#d4edda" : "#f8d7da",
                        padding: "8px",
                        borderRadius: "4px",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "bold", textAlign: "center" }}
                      >
                        Status: {result.status}
                      </Typography>
                    </Box>
                  </Container>
                )}
              </Container>
            </CardContent>
          </Card>
        </Modal>
      )}
    </>
  );
};

export default VerifiyCert;
