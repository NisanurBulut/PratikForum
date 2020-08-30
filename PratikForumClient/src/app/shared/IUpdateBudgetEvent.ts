import { BudgetItem } from '../models';

export interface IUpdateBudgetEvent {
    old: BudgetItem;
    new: BudgetItem;
}
