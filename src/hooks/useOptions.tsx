import React from 'react';
import type { SelectProps } from 'components/Select'

export type Option = {
  label: string, 
  value: string
}

export function useOptions(options: Option[], initialValue?: string, deps?: any[]) : [string, SelectProps] {
  // Let the caller decide the memoization deps.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _options = React.useMemo(() => options, [...(deps || [])])

  const _initial = initialValue !== undefined 
    ? initialValue 
    : _options[0]?.value || '';

  const [selection, setSelection] = React.useState<string>(_initial);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelection(newValue);
  }

  const selectProps = React.useMemo<SelectProps>(() => ({
    value: selection,
    onChange: handleChange,
    children: _options.map(opt => (
      <option key={opt.value} {...opt}/>
    ))
  }), [selection, _options]);

  return [selection, selectProps];
}