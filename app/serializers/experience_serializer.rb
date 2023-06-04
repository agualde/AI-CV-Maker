class ExperienceSerializer < ActiveModel::Serializer
  attributes :id, :header, :sub_header,:description
  
  def header
    object.company_name
  end
  
  def sub_header
    object.role
  end
end
