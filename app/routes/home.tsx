import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  FilterAlt,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const columns = ["id", "name", "email", "created_date", "updated_date"];

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 4 }}>
      <Card>
        <CardHeader
          title={<Typography variant="h6">Table Title</Typography>}
          subheader={
            <Typography variant="body2">
              Additional description if required
            </Typography>
          }
        />
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <InputBase
                placeholder="Name, email, etc..."
                sx={{
                  border: "1px solid",
                  borderColor: "grey.400",
                  borderRadius: 1,
                  px: 2,
                  py: 1,
                  width: 300,
                }}
              />
              <Select
                defaultValue="Property"
                sx={{ width: 180, borderRadius: 1 }}
              >
                <MenuItem value="Property">Property</MenuItem>
              </Select>
              <IconButton>
                <FilterAlt />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="contained">Action</Button>
              <IconButton>
                <Settings />
              </IconButton>
            </Box>
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell
                      key={index}
                      onClick={handleSort}
                      sx={{ cursor: "pointer" }}
                    >
                      {column} {sortOrder === "asc" ? "▲" : "▼"}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {[...Array(2)].map((_, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {columns.map((column, cellIndex) => (
                      <TableCell key={cellIndex}>{column} value</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography variant="body2">Rows per page: 10</Typography>
            <Typography variant="body2">1-5 of 13</Typography>
            <Box>
              <IconButton>
                <ChevronLeft />
              </IconButton>
              <IconButton>
                <ChevronRight />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
