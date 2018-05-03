class Api::ContactsController < ApplicationController
     def index
    @contacts = User.find(params[:user_id]).contacts
    render json: @contacts
  end

  def show
@contact = Contact.find(params[:id])
    render json: @contacts
  end

  def create
    @user = User.find(params[:user_id])
    @contact = Contact.new(contact_params)

    @contact.contacts << @contact
    @contact.save!

    render json: @contact
  end

  def update
    @contact = Contact.find(params[:id])
    @contact.update!(contact_params)

    render json: @contact
  end

  def destroy
    @contact = Contact.find(params[:id]).delete

    render status: :ok
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :cell_number, :work_number, :home_number)
  end
end
