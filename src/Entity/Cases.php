<?php

class Cases
{
    protected $caseDescription;
    protected $caseCreatedAt;
    protected $caseStatus;
    protected $caseEndDate;
    protected $caseIdClient;

    /**
     * @param $caseDescription
     * @param $caseCreatedAt
     * @param $caseStatus
     * @param $caseEndDate
     * @param $caseIdClient
     */
    public function __construct($caseDescription, $caseCreatedAt, $caseStatus, $caseEndDate, $caseIdClient)
    {
        $this->caseDescription = $caseDescription;
        $this->caseCreatedAt = $caseCreatedAt;
        $this->caseStatus = $caseStatus;
        $this->caseEndDate = $caseEndDate;
        $this->caseIdClient = $caseIdClient;
    }

    /**
     * @return mixed
     */
    public function getCaseDescription()
    {
        return $this->caseDescription;
    }

    /**
     * @param mixed $caseDescription
     * @return Cases
     */
    public function setCaseDescription($caseDescription)
    {
        $this->caseDescription = $caseDescription;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getCaseCreatedAt()
    {
        return $this->caseCreatedAt;
    }

    /**
     * @param mixed $caseCreatedAt
     * @return Cases
     */
    public function setCaseCreatedAt($caseCreatedAt)
    {
        $this->caseCreatedAt = $caseCreatedAt;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getCaseStatus()
    {
        return $this->caseStatus;
    }

    /**
     * @param mixed $caseStatus
     * @return Cases
     */
    public function setCaseStatus($caseStatus)
    {
        $this->caseStatus = $caseStatus;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getCaseEndDate()
    {
        return $this->caseEndDate;
    }

    /**
     * @param mixed $caseEndDate
     * @return Cases
     */
    public function setCaseEndDate($caseEndDate)
    {
        $this->caseEndDate = $caseEndDate;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getCaseIdClient()
    {
        return $this->caseIdClient;
    }

    /**
     * @param mixed $caseIdClient
     * @return Cases
     */
    public function setCaseIdClient($caseIdClient)
    {
        $this->caseIdClient = $caseIdClient;
        return $this;
    }



}