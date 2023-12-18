export interface IbillInfo {
  firstName: string;
  lastName: string;
  address: string;
  addressLineTwo: string;
  state: string;
  district: string;
  postal: string;
  skills: {
    language: string;
    yearofexperience: number;
  };
}
