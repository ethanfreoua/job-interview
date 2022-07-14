import React from "react";
import { useFormik } from "formik";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const MuiForm = () => {
  const initalValues = {
    fieldName: "",
    type: "",
    offset1: "",
    offset2: "",
    description: "",
  };

  const formik = useFormik({
    initialValues: initalValues,

    onSubmit: (formValues) => {
      console.log(formValues);
    },

    validate: (formValues) => {
      const errors = {};
      if (!formValues.fieldName) {
        errors.fieldName = "FieldName is required";
      }

      if (!formValues.type) {
        errors.type = "Type is required";
      }

      if (!formValues.offset1) {
        errors.offset1 = "Offset is required";
      }

      if (!formValues.offset2) {
        errors.offset2 = "Offset is required";
      }

      if (!formValues.description) {
        errors.description = "Description is required";
      }
      return errors;
    },
  });

  const { values, handleChange, handleSubmit, handleBlur } = formik;

  return (
    <div>
      <h1>Field Declaration</h1>

      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column">
          <InputLabel>
            <span style={{ color: "orange" }}>*</span>{" "}
            <span style={{ color: "gray" }}>Field name</span>
          </InputLabel>
          <TextField
            placeholder="Field Name"
            type="text"
            name="fieldName"
            variant="outlined"
            value={values.fieldName}
            onChange={formik.handleChange}
            onBlur={handleBlur}
          />
        </Box>
        {formik.errors.fieldName && (
          <span style={{ color: "red" }}>{formik.errors.fieldName}</span>
        )}

        <Box mt={2} mb={2}>
          <InputLabel id="demo-simple-select-label">
            <span style={{ color: "orange" }}>*</span>{" "}
            <span style={{ color: "gray" }}>Type</span>
          </InputLabel>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              IconComponent={ArrowDownwardIcon}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="type"
              label="Type"
              value={values.type}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <MenuItem value={"d"}>String</MenuItem>
              <MenuItem value={"g"}>Number</MenuItem>
            </Select>
            {formik.errors.type && formik.touched.type && (
              <span style={{ color: "red" }}> {formik.errors.type} </span>
            )}
          </FormControl>
        </Box>

        <Box mb={2}>
          <InputLabel
            id="demo-simple-select-label"
            sx={{ display: "inline", m: 1 }}
          >
            From
          </InputLabel>
          <FormControl>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="offset1"
              value={values.offset1}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formik.errors.offset1 && formik.touched.offset1 && (
              <span style={{ color: "red" }}> {formik.errors.offset1} </span>
            )}
          </FormControl>

          <InputLabel
            id="demo-simple-select-label"
            sx={{ display: "inline", m: 1 }}
          >
            To
          </InputLabel>
          <FormControl>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="offset2"
              value={values.offset2}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formik.errors.offset2 && formik.touched.offset2 && (
              <span style={{ color: "red" }}> {formik.errors.offset2} </span>
            )}
          </FormControl>
        </Box>

        <Box>
          <InputLabel id="demo-simple-select-label">Description</InputLabel>
          <TextField
            variant="outlined"
            placeholder="Add description"
            fullWidth
            multiline
            rows={4}
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formik.errors.description && formik.touched.description && (
            <span style={{ color: "red" }}> {formik.errors.description} </span>
          )}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", m: 2 }}>
          <Button
            variant="contained"
            type="submit"
            sx={{ mr: 2, bgcolor: "#59667a" }}
          >
            Cancel
          </Button>
          <Button variant="contained" type="submit" sx={{ bgcolor: "#ff784e" }}>
            Save
          </Button>
        </Box>
      </form>
    </div>
  );
};
export default MuiForm;
