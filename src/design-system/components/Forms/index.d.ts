type TFormTypes = "text" | "password" | "number" | "radio" | "checkBox" | 'email' | 'tel';





interface ISharedFormProps {
    name: string;
    type: TFormTypes;
    state: any;
}