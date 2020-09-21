import { getReq } from './httpBase';

const EventService = {
  async getAllEvents() {
    return getReq('/events');
  },
  async getEventById(eventId) {
    return getReq(`/events/${eventId}`);
  },
  async getEventsSessions(eventId) {
    return getReq(`/events/${eventId}/sessions`);
  },
};

export default EventService;
