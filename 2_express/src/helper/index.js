import Logs from "../model/logModel";

export default async function helperLogs(endpoint, parameter) {
  try {
    const logCreate = await Logs().create({
      endpoint,
      parameter,
    });

    console.log(`Success insert log`);
  } catch (err) {
    console.log(`Failed to insert log ${err}`)
  }
}
