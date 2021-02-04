import normalize from "us-states-normalize";
import moment from "moment";

const errorColor = "rgba(242, 38, 19, 0.3)";

const formatPhoneNumber = (value) => `+1${value.slice(-10)}`;

const validateEmail = (value) =>
  value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/);

const validatePhoneNumber = (value) => value.match(/^((\+?\d{1}?)?\d{10})$/);

const validateAge = (value) => Number.isInteger(+value) && value > 0;

const validateExperience = (row) =>
  Number.isInteger(+row.experience) &&
  +row.experience >= 0 &&
  +row.age - 21 >= +row.experience;

const formatIncome = (value) => {
  const income = value.slice(1);
  return Number(income).toFixed(2);
};

const validateHasChildren = (value) =>
  value.toLowerCase() === "true" || value.toLowerCase() === "false";

const formatStates = (value) => {
  const statesArr = value.split("|").map((state) => normalize(state));
  return statesArr.length > 1 ? statesArr.join(", ") : statesArr.join("");
};

const validateExperationDate = (value) => {
  const futureDate = moment(new Date(value)).diff(moment(Date.now())) > 0;

  const validDate =
    moment(value, "YYYY-MM-DD", true).isValid() ||
    moment(value, "MM/DD/YYYY", true).isValid();

  return validDate && futureDate;
};

const validateLicenseNumber = (value) => value.match(/^[a-zA-Z0-9]{6}$/);

export const columns = [
  {
    name: "Full Name",
    selector: "full name",
    conditionalCellStyles: [
      {
        when: (row) => !row?.["full name"],
        style: {
          backgroundColor: errorColor,
        },
      },
    ],
  },
  {
    name: "Phone",
    selector: "phone",
    format: (row) =>
      row?.phone && validatePhoneNumber(row.phone)
        ? formatPhoneNumber(row.phone)
        : row.phone,
    conditionalCellStyles: [
      {
        when: (row) =>
          (row?.phone && !validatePhoneNumber(row.phone)) || !row?.phone,
        style: {
          backgroundColor: errorColor,
        },
      },
    ],
  },
  {
    name: "Email",
    selector: "email",
    conditionalCellStyles: [
      {
        when: (row) =>
          (row?.email && !validateEmail(row?.email)) || !row?.email,
        style: {
          backgroundColor: errorColor,
        },
      },
    ],
  },
  {
    name: "Age",
    selector: "age",
    conditionalCellStyles: [
      {
        when: (row) => (row?.age && !validateAge(row.age)) || !row?.age,
        style: {
          backgroundColor: errorColor,
        },
      },
    ],
  },
  {
    name: "Experience",
    selector: "experience",
    conditionalCellStyles: [
      {
        when: (row) =>
          (row?.experience && !validateExperience(row)) || !row?.experience,
        style: {
          backgroundColor: errorColor,
        },
      },
    ],
  },
  {
    name: "Yearly Income",
    selector: "yearly income",
    format: (row) =>
      row?.["yearly income"] && formatIncome(row["yearly income"]),
    conditionalCellStyles: [
      {
        when: (row) =>
          (row?.["yearly income"] &&
            formatIncome(row["yearly income"]) > 1000000) ||
          !row?.["yearly income"],
        style: {
          backgroundColor: errorColor,
        },
      },
    ],
  },
  {
    name: "Has Children",
    selector: "has children",
    cell: (row) => (
      <span style={{ textTransform: "uppercase" }}>
        {row?.["has children"] ? row?.["has children"] : "false"}
      </span>
    ),
    conditionalCellStyles: [
      {
        when: (row) =>
          row?.["has children"] && !validateHasChildren(row["has children"]),
        style: {
          backgroundColor: errorColor,
        },
      },
    ],
  },
  {
    name: "License States",
    selector: "license states",
    cell: (row) =>
      (row?.["license states"] && (
        <div style={{ display: "flex" }}>
          {formatStates(row["license states"])}
        </div>
      )) ||
      !row?.["license states"],
  },
  {
    name: "Expiration Date",
    selector: "expiration date",
    conditionalCellStyles: [
      {
        when: (row) =>
          (row?.["expiration date"] &&
            !validateExperationDate(row["expiration date"])) ||
          !row?.["expiration date"],
        style: {
          backgroundColor: errorColor,
        },
      },
    ],
  },
  {
    name: "License Number",
    selector: "license number",
    conditionalCellStyles: [
      {
        when: (row) =>
          (row?.["license number"] &&
            !validateLicenseNumber(row?.["license number"])) ||
          !row?.["license number"],
        style: {
          backgroundColor: errorColor,
        },
      },
    ],
  },
  {
    name: "ID",
    selector: "id",
  },
  {
    name: "Duplicate with",
    selector: "duplicate",
  },
];

export const findDuplicates = (arr, value, cell1, cell2) =>
  arr.find((item) => {
    if (!(item[cell1] && value[cell1]) || !(item[cell2] && value[cell2]))
      return undefined;

    return (
      item.id !== value.id &&
      (item[cell1]?.toLowerCase() === value[cell1]?.toLowerCase() ||
        item[cell2] === value[cell2])
    );
  })?.id;
