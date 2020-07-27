import { BudgetItem } from '../models/budget-item.model';

export interface IUpdateBudgetEvent {
    old: BudgetItem;
    new: BudgetItem;
}
