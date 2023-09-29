import { fakedata } from "../data/movement-data";
import { showModal } from "./ActionMain.vue";

export const submit = (data) => {
fakedata.push(data);
console.log(fakedata);
showModal.value = !showModal.value;
};
