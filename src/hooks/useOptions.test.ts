import { act, renderHook } from '@testing-library/react-hooks';
import { useOptions } from './useOptions';


const testOptions = [
  { label: 'One', value: 'one' },
  { label: 'Two', value: 'two' },
  { label: 'Three', value: 'three' },
];


it('should start with the given initialValue', () => {
  const expectedValue = 'FORTY_TWO';
  const { result } = renderHook(() => useOptions(testOptions, expectedValue));
  const [currentValue, selectProps] = result.current;

  expect(currentValue).toEqual(expectedValue);
  expect(selectProps.value).toEqual(expectedValue);
});


it('should use the first value if no initialValue is given', () => {
  const { result } = renderHook(() => useOptions(testOptions));
  const expectedValue = testOptions[0].value;
  const [currentValue, selectProps] = result.current;

  expect(currentValue).toEqual(expectedValue);
  expect(selectProps.value).toEqual(expectedValue);
});


it('should update the current value when onChange() is called', () => {
  const { result } = renderHook(() => useOptions(testOptions));
  const [value1, props1] = result.current;
  const expectedValue = testOptions[2].value;
  expect(value1).not.toEqual(expectedValue);

  act(() => {
    props1.onChange({ target: { value: expectedValue } });
  });

  const [value2, props2] = result.current;
  expect(value2).toEqual(expectedValue);
  expect(props2.value).toEqual(expectedValue);
});


it('should return valid option elements in the selectProps', () => {
  const { result } = renderHook(() => useOptions(testOptions));
  const [_, props] = result.current;

  expect(props.children.length).toEqual(testOptions.length);

  props.children.forEach((child, idx) => {
    expect(child.type).toEqual('option');
    expect(child.key).not.toBeUndefined();
    expect(child.props.label).toEqual(testOptions[idx].label);
    expect(child.props.value).toEqual(testOptions[idx].value);
  })
});