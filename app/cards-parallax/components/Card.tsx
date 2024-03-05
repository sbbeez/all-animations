import { motion, useTransform } from "framer-motion";

const Card = (props: any) => {
  const scale = useTransform(props.progress, props.range, [
    1,
    props.targetScale,
  ]);
  return (
    <div className="h-[100vh] sticky flex items-center justify-center top-0">
      <motion.div
        className={"flex flex-col relative rounded p-14 w-[680px]"}
        style={{
          backgroundColor: props.color,
          scale,
          top: `calc(-5vh + ${props.i * 25}px)`,
        }}
      >
        <h1 className="text-center m-0 text-3xl">{props.title}</h1>
      </motion.div>
    </div>
  );
};

export default Card;
