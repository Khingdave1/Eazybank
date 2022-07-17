export interface ITransactionCode {
  transCode?: string;
  transDesc?: string;
  transTypeId?: number;
  mainNarrative?: string;
  contraNarrative?: string;
  defaultContraAcct?: string;
  fixedContraAcct?: boolean;
  trackCount?: boolean;
  menuItemId?: number;
  userDefined?: boolean;
  addedBy?: string
}
