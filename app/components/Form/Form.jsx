import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
      {fieldNames.map((field, index) => (
        <div key={index}>
          <Label>{field.label}</Label>
          {field.type === "textarea" ? (
            <Textarea
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              {...register(field.name)}
            />
          ) : (
            <Input
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              {...register(field.name)}
            />
          )}
        </div>
      ))}

      {selectBar ? (
        <div className="flex flex-col my-5 justify-between">
          <Label>{selectLabel}</Label>
          <SelectBar options={options} onChange={onChange} className="py-20" />
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
