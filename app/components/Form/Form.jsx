import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectBar from "../Select/Select";

const DynamicForm = ({
  fieldNames,
  onSubmit,
  selectBar,
  options,
  onChange,
  selectLabel,
}) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fieldNames.map((fieldName, index) => (
        <div key={index}>
          <Label>{fieldName}</Label>
          <Input
            type="text"
            id={fieldName}
            name={fieldName}
            placeholder={`Enter ${fieldName}`}
            {...register(fieldName)}
          />
        </div>
      ))}

      {selectBar ? (
        <div className="flex flex-col my-5 justify-between">
          <Label>{selectLabel}</Label>
          <SelectBar
            options={options}
            onChange={onChange}
            className="py-20"
          />{" "}
        </div>
      ) : (
        <></>
      )}
      <Button type="submit" className="flex justify-center">
        Submit
      </Button>
    </form>
  );
};

export default DynamicForm;
