import { createSelector } from 'reselect';
import { Select } from 'antd';
const { Option } = Select;

export const symbolsAsOptionsSelector = createSelector(
  (state) => state.symbols,
  (symbols) => symbols.sort().map(s => <Option key={s}>{s}</Option>)
)