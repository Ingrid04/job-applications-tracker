class Api::V1::JobApplicationsController < ApplicationController
  before_action :set_job_application, only: [:edit, :show, :destroy]

  def index
    job_applications = JobApplication.all
    render json: job_applications, status: 200
  end

  def show
    render json: job_application, status: 200
  end

  def new
  end

  def edit
    render json: job_application, status: 200
  end

  def create
    curr_user = User.find_by(id: params[:job_application][:user_id])
    job_application = curr_user.job_applications.build(job_application_params)
    if job_application.save
      render json: job_application, status: 200
    else
      render json: { error: "Failed to create an Application", status: 500 }, status: 500
    end
  end

  def update
    if params[:id] != "undefined"
      job_application = JobApplication.find(params[:id])
      job_application.update(job_application_params)
      render json: job_application, status: 200
    end
  end

  def destroy
    job_application.delete
    render json: { job_applicationID: job_application.id }
  end

  private

  def set_job_application
    job_application = JobApplication.find(params[:id])
  end

  def job_application_params
    params.require(:job_application).permit(:id, :user_id, :application_date, :company, :role, :contact, :interview_status, :notes)
  end
end
