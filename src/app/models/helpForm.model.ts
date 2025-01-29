export interface HelpForm {
  uid: string;
  problemSummary: string;
  problemDetails: string;
  incidentDate: string;
  affectedPages?: string;
  status: 'pending' | 'in-progress' | 'resolved';
  createdAt: Date;
  userid: string;
}
