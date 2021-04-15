import axios from "axios";
import config from "../../config";
import helperLogs from "../helper";
import logModel from "../model/logModel";

export async function searchController(req, res) {
  const {
    query: { q = "" },
  } = req || {};
  if (q === "")
    return res.send({ message: "Please use like: search?q={keyword}" });

  try {
    const response = await axios.get(`${config.ENDPOINT}&s=${q}`);
    helperLogs("/search", q);

    return res.send({
      isSuccess: true,
      data: response?.data?.Search ?? {},
    });
  } catch (err) {
    return res.send({
      isSuccess: false,
      err,
    });
  }
}

export async function detailController(req, res) {
  const {
    params: { id },
  } = req || {};
  try {
    const response = await axios.get(`${config.ENDPOINT}&i=${id}`);
    helperLogs("/detail/", id);

    return res.send({
      isSuccess: true,
      data: response?.data ?? {},
    });
  } catch (err) {
    return res.send({
      isSuccess: false,
      err,
    });
  }
}

export async function logController(req, res) {
  try {
    const response = await logModel().findAll();
    helperLogs("/log");
    return res.send({
      isSuccess: true,
      data: response,
    });
  } catch (err) {
    return res.send({
      isSuccess: false,
      err,
    });
  }
}
