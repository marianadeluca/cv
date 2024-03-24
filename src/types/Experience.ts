import Period from "./Period";
import Tag from "./Tag";
interface Experience {
  periodStart: Period;
  periodEnd: Period;
  companyName: string;
  description: string;
  skills: Tag;
}
export default Experience;
