import { ApartamentModel } from "./apartaments.model";

export interface AccountModel {
    apartaments: Array<ApartamentModel>;
    isTherePaymentAgreementInPlace: boolean;
    fullName: string;
    email: string;
    phone: string;
    roleId: number;
    roleName: string
    lastLogin: string;
}