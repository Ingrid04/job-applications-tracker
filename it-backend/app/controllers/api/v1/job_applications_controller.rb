class Api::V1::JobApplicationsController < ApplicationController
  before_action :set_job_application, only: [:edit, :show, :destroy]

  def index
    if logged_in?
      job_applications = current_user.job_applications
      render json: job_applications, status: 200
    else
      render json: [{
        error: "You must be logged in to see your applications",
      }]
    end
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
    # byebug
    if logged_in?
      job_application = current_user.job_applications.create(job_application_params)
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
    @job_application.destroy
    render json: { data: "Job Application destroyed" }
  end

  private

  def set_job_application
    @job_application = JobApplication.find(params[:id])
  end

  def job_application_params
    params.require(:jobApplication).permit(:id, :user_id, :application_date, :company, :role, :contact, :interview_status, :notes)
  end
end
