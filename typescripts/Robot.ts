import {IActivity} from './Playground-caller';

export class Robot implements IActivity{
    public Walk(): string {
        return "Robot walking...";
    };
    public Talk(): string {
        return "Robot talking...";
    }
}