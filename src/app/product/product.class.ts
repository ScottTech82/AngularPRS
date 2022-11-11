import { Vendor } from "../vendor/vendor.class";

export class Product {
    id: number = 0;
    partNbr: string = "";
    name: string = "";
    price: number = 0;
    unit: string = "";
    photoPath: string = "";
    vendorId!: number;
    vendor!: Vendor;

    VendorName: string = "";
}