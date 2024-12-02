type TFormTypes = "text" | "password" | "number" | "radio" | "checkBox" | 'email' | 'tel' | 'text-area';





interface ISharedFormProps {
    name: string;
    type: TFormTypes;
    state: T;
}