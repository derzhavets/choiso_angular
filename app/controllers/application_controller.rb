class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery
  after_filter :set_csrf_cookie_for_ng
  before_action :configure_permitted_parameters, if: :devise_controller?
  
  respond_to :json
  
  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end
  
  def angular
    render 'layouts/application'
  end
  
  
  private
  
  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end
  
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << [ :first_name, :last_name ]
  end
end
