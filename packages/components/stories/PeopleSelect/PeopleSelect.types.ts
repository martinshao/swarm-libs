export interface PeopleType {
  /**
   * option value
   */
  value: string | number;
  /**
   * option key
   */
  name: string | number;
}

export interface PeopleSelectProps {
  /**
   * 数据改变时触发的回调
   */
  onChange: (value: React.SetStateAction<PeopleType>) => void;
  /**
   * 数据
   */
  data: PeopleType[];
  /**
   * 当前选中的数据
   */
  selected: PeopleType;
}
