import tracer from 'dd-trace';
import formats from 'dd-trace/ext/formats';

export class Logger {
  log(level: string, message: string) {
    const span = tracer.scope().active();
    const time = new Date().toISOString();
    const record = { time, level, message };

    if (span) {
      tracer.inject(span.context(), formats.LOG, record);
    }

    console.log(JSON.stringify(record));
  }
}
