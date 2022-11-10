export interface DataType {
  /**
   * option value
   */
  value: string | number;
  /**
   * option key
   */
  name: string | number;
}

export interface SelectProps {
  /**
   * 数据改变时触发的回调
   */
  onChange: (value: React.SetStateAction<DataType>) => void;
  /**
   * 数据
   */
  data: DataType[];
  /**
   * 当前选中的数据
   */
  selected: DataType;
}
