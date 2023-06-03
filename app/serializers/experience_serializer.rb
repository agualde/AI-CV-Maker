class ExperienceSerializer < ActiveModel::Serializer
  attributes :id, :header, :sub_header,:description
  
  def header
    object.role
  end

  def sub_header
    object.company_name
  end
end
