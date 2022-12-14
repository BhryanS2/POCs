import tracer from "dd-trace";

tracer.init({
  logInjection: true,
  env: "development",
});

export default tracer;
